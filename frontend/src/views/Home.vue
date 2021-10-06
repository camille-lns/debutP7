<template>
    <div id="posts">
        <Navigation />

        <b-row class="align-items-center text-center justify-content-center">
            <b-col cols="12" lg="6">
                <b-card
                class="mx-auto mb-2 mt-lg-3 mb-lg-5 border-0 shadow px-lg-3 pt-lg-4 bg-white rounded"
                >
                    <b-card-text>
                        Bonjour Prénom
                    </b-card-text>
                
                <Create />
                </b-card>
            </b-col>
        </b-row>
        <PostsList />
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Create from '../components/Create.vue'
import PostsList from '../components/PostsList.vue'

export default {
    name: 'Home',
    components: {
        Navigation, 
        Create, 
        PostsList
    },
    
}
</script>

<style lang="scss">
.card-body {
    padding-bottom: 0;
}

@media screen and (min-width: 280px) and (max-width: 769px) {
    .card-body {
        padding: 0.7rem;
    }

    .shadow {
        box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.08) !important;
    }
}

.row {
    margin-left: 0;
    margin-right: 0;
}
</style>