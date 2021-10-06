<template>
    <div>
        <b-form>
            <Form
            />
        </b-form>
    </div>
</template>

<script>
import Form from './Form'

export default {
    name: 'CreatePost',
    components: {
        Form
    },

}
</script>

<style lang="scss">
.custom-file-label {
    text-align: left;
}
</style>