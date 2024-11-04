<template>
    <section class="clearfix py-3 py-lg-5 register-area">
        <div class="container">
            <div class="bg-info pe-md-4">
                <div class="row">
                    <div class="col-md-6">
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1730746176~exp=1730749776~hmac=3b3cf904d2544a8ba7d5c2bba9ffde0c320bdec17fa9403bb037260b264d1489&w=826" alt="register image" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <form action="javascript:void(0)" method="POST">
                            <h2>Let's start your journey.</h2>
                            <div class="input-field mb-3">
                                <label class="form-label" for="applicant-name">Name</label>
                                <input type="text" class="form-control" id="applicant-name">
                            </div>
                            <div class="input-field mb-3">
                                <label class="form-label" for="applicant-email">Email Address</label>
                                <input type="email" class="form-control" id="applicant-email">
                            </div>
                            <div class="input-field mb-3">
                                <label class="form-label" for="applicant-username">Username</label>
                                <input type="email" class="form-control" id="applicant-username">
                            </div>
                            <div class="input-field mb-3">
                                <label class="form-label" for="applicant-password">Password</label>
                                <input type="password" class="form-control" id="applicant-password">
                            </div>
                            <button class="btn btn-primary" type="submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .register-area{
        .container{
            max-width: 960px;
            overflow: hidden;
        }
        img{
            max-height: 100% !important;
        }
    }
</style>