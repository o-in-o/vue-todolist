<template>
  <p>Появится позже</p>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Card from "../components/common/Card/Card";

@Component({ components: { Card } })
export default class KanbanPage extends Vue {}
</script>

<style scoped></style>
