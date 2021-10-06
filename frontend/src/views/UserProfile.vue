<template>
    <div>
        <Navigation />
        <b-container>
            <div class="d-flex justify-content-center flex-wrap mb-5">
                <b-card class="col-lg-6 ">
                    
                    <b-row class="text-center justify-content-center">
                        <div class="d-flex align-items-center flex-column">
                            <ProfileImg
                            customClass="profile-main-picture"
                            divCustomClass="divUserPP"
                            />
                            <p class="user-name">
                            Prénom Nom
                            </p>

                            <p>Poste occupé dans l'entreprise</p>

                            <b-button size="sm">Editer</b-button>
                        </div>
                    </b-row>
                </b-card>
            </div>

            <UserPosts />
        </b-container>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import ProfileImg from '../components/ProfileImg.vue'
import UserPosts from '../components//UserPosts.vue'

export default {
    name: 'Profile', 
    components: {
        Navigation, 
        ProfileImg,
        UserPosts
    }
}


</script>

<style lang="scss">
.divUserPP {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
    box-shadow: 0px 1px 2px 2px rgba(204, 204, 204, 0.5);
}

.profile-main-picture {
    height: 120px;
}

.user-name {
    font-size: 20px;
    font-weight: bold;
}

@media screen and (min-width: 280px) and (max-width: 767px) {
    .user-name {
        font-size: 16px;
    }

    .div-user-profile-picture {
        width: 95px;
        height: 95px;
    }

    .profile-main-picture {
        height: 95px;
    }
}
</style>