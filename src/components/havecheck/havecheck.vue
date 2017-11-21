<template>
    <div class="havecheck">
        <b-card-group deck>
            <b-card header="已监控" header-tag="header" title="" class="mouseChange" no-body>
                <b-card-body v-b-modal.modallg variant="primary">
                    {{}}天
                </b-card-body>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .mouseChange header {
        cursor: move;
    }
    .mouseChange .card-body {
        cursor: pointer;
    }
    .xlg .modal-dialog {
        width: 80% !important;
        max-width: 80% !important;
    }
</style>
