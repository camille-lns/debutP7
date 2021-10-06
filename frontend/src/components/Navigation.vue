<template>
    <div>
        <b-navbar variant="light" type="light" class="mb-3 py-4">
            <div
                id="nav"
                class="d-flex justify-content-start "
            >
                <router-link to="/home">
                    <img
                    id="logo"
                    :src="require('../assets/icon-left-font-monochrome-black.svg')"
                    alt="logo Groupomania"
                    />
                </router-link>
            </div>

            <b-navbar-nav class="ml-auto sticky-top justify-content-start">
                <div>
                    <b-navbar-brand >Profil
                        <b-icon-person></b-icon-person>
                    </b-navbar-brand>
                    <b-navbar-brand >Déconnexion
                        <b-icon-box-arrow-right></b-icon-box-arrow-right>
                    </b-navbar-brand>
                </div>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    
</script>

<style lang="scss">

#nav {
    background: white;
    z-index: 1;
    #logo {
        max-width: 250px;
    }
}

@media screen and (min-width: 280px) and (max-width: 767px) {
    body {
        font-size: 13px !important;
    }
    #nav #logo {
        max-width: 180px;
    }
}
@media screen and (min-width: 767px) and (max-width: 991px) {
    #nav #logo {
        max-width: 200px;
    }
}

</style>