<template>
    <div class="container">
        <h1>number component</h1>
        <bk-button>Work please!</bk-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BkButton from '@benjaminkent/bk-button'

@Component({})
export default class BkNumberFact extends Vue {}
</script>