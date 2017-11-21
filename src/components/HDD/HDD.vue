<template>
    <div class="HDD">
        <b-card-group deck>
            <b-card header="HDD" header-tag="header" class="mouseChange" no-body>
                <b-card-body v-b-modal.modallg variant="primary">
                    共{{}}G
                    <b-progress class="mt-1" :max="max" show-value>
                        <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
                    </b-progress>
                </b-card-body>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 100,
                max: 100,
                curIndex: 0
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
