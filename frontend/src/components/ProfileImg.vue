<template>
    <div class="profile-picture" :class="divCustomClass">
        <img
        class="profile-picture__img"
        :class="customClass"
        :src="src || 'default-avatar.jpg'"
        alt=""
        />
    </div>
</template>

<script>
export default {
    name: 'ProfileImage',
    props: ['customClass', 'divCustomClass', 'src']
}
</script>


<style lang="scss">
.profile-picture {
    overflow: hidden;
    border-radius: 30%;

    &__img {
        transform: scale(1.50);
    }
}
</style>