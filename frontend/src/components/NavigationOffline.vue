<template>
    <div>
        <b-navbar variant="light" type="light" class="justify-content-center mb-3 py-4">
            <div
                id="nav"
            >
                <router-link to="/">
                    <img
                    id="logo"
                    :src="require('../assets/icon-left-font-monochrome-black.svg')"
                    alt="logo Groupomania"
                    />
                </router-link>
            </div>
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