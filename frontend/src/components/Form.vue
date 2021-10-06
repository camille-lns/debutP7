<template>
    <div>
        <b-form-group>
        <div class="d-flex align-items-center">
            <div class="d-flex mr-2 mr-lg-3 mt-2">
            <router-link :to="{ name: 'Profile' }">
                <ProfileImage
                customClass="post-profile-picture"
                divCustomClass="div-post-picture"
            /></router-link>
            </div>
            <b-form-textarea
            id="content"
            :placeholder="`Quoi de neuf, (prénom) ?`"
            aria-label="Écrire une publication"
            class="text-dark mb-2 mr-2 w-100"
            ></b-form-textarea>
        </div>
        <div
            id="preview"
            class="d-flex justify-content-center align-items-center"
        >
            <img class="mt-3" v-if="url" :src="url" alt="" />
        </div>
        </b-form-group>
        <div class="line mb-3"></div>
        <b-form-group>
            <div class="d-flex justify-content-around">
                <button
                class="d-flex align-items-center justify-content-center createButton btn-block"
                type="button"
                aria-label="Choisir un fichier"
                >
                    <span class="mr-2 d-none d-md-block">Choisir un fichier</span>
                </button>
            </div>
        </b-form-group>
    </div>
</template>

<script>
import ProfileImg from './ProfileImg'
export default {
    name: 'PostForm',
    components: {
        ProfileImg
    },
}
</script>

<style lang="scss">
#preview img {
    max-width: 100%;
    max-height: 500px;
}
.disabled {
    cursor: not-allowed;
}
.form-control {
    border: 1px solid rgba(192, 192, 192, 0.5);
    &:focus {
        border: none;
    }
}
.line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(192, 192, 192, 0.5);
}
.createButton {
    background: white;
    color: #747474;
    border: none;
    border-radius: 0.30rem;
    font-weight: 500;
    padding: 0.375rem 0.75rem;
    &:hover {
        background-color: rgba(108, 117, 125, 0.1);
    }
    &:active,
    &:focus {
        background-color: white !important;
        outline: none;
    }
}
</style>