<template>
    <div>
            <div class="d-flex justify-content-center flex-wrap">
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="2" >
                        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded pl-3 py-3"></b-card-img>
                    </b-col>
                    <b-col md="10">
                        <b-card-body>
                            <h4>Prénom Nom</h4>
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer. This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                    <b-row class="pb-2"><div class="line"></div></b-row>
                    <b-row >
                        <b-col md="3">
                        <div class="like">
                            <p><b-icon-heart-fill></b-icon-heart-fill> J'aime</p>
                        </div>
                        </b-col>
                        <b-col md="9">
                            <div>
                                <b-form class="p-2">
                                    <b-form-textarea
                                        id="content"
                                        :placeholder="`Quoi de neuf, (prénom) ?`"
                                        aria-label="Écrire une publication"
                                        class="text-dark w-100"
                                        ></b-form-textarea>
                                </b-form>
                            </div>
                        </b-col>
                    </b-row>    
                </b-card>
            </div>
    </div>
</template>

<script> 

</script>

<style lang="scss">
.card-body {
    padding-top: 12px !important;
    text-align: justify;
}

</style>