<template>
    <div class="login-box">
        <div class="login-logo">
            <router-link to="/home"><b>Admin</b>LTE</router-link>
        </div><!-- /.login-logo -->

        <!--@if (session('status'))-->
        <!--<div class="alert alert-success">-->
            <!--{{ session('status') }}-->
        <!--</div>-->
        <!--@endif-->

        <!--@if (count($errors) > 0)-->
        <!--<div class="alert alert-danger">-->
            <!--<strong>Whoops!</strong> {{ trans('adminlte_lang::message.someproblems') }}<br><br>-->
            <!--<ul>-->
                <!--@foreach ($errors->all() as $error)-->
                <!--<li>{{ $error }}</li>-->
                <!--@endforeach-->
            <!--</ul>-->
        <!--</div>-->
        <!--@endif-->

        <div class="login-box-body">
            <p class="login-box-msg">Password Reset</p>
            <form action="#" method="post">
                <input type="hidden" name="_token" value="TODO">
                <input type="hidden" name="token" value="TODO">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" name="email" value=""/>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>

                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" name="password"/>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>

                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" name="password_confirmation"/>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>

                <div class="row">
                    <div class="col-xs-2">
                    </div><!-- /.col -->
                    <div class="col-xs-8">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Reset</button>
                    </div><!-- /.col -->
                    <div class="col-xs-2">
                    </div><!-- /.col -->
                </div>
            </form>

            <router-link to="/register" class="text-center">Register a new membership</router-link><br/>
            <router-link to="/login" class="text-center">I already have a membership</router-link>

        </div><!-- /.login-box-body -->

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Reset password component ready.')
        }
    }
</script>
