<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

    /**
	 * Run the migrations.
	 *
	 * @return void
	 */
    public function up() {
        Schema::create('users', function (Blueprint $table) {
                $table->increments('id');

                $table->string('username', 32)->unique();
                $table->string('password', 64);
                $table->boolean('super_user');
                $table->string('remember_token', 100);

                $table->timestamps();
                $table->softDeletes();
            });
    }

    /**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
    public function down() {
        Schema::drop('users');
    }

}
