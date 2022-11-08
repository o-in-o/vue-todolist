<template>
  <div class="card-container">
    <h3>featured</h3>
    <h2>Card title</h2>
    <p>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <custom-button > Go Somewhere</custom-button>
    <p>2 days ago</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomButton from "@/components/UI/CustomButton.vue";

@Component({
  components: {
    CustomButton,
  },
})
export default class Card extends Vue {}
</script>

<style scoped lang="scss">
.card-container {
  width: 327px;
  height: 306px;
  box-shadow: 0 10px 30px rgba(17, 38, 146, 0.05);
  border-radius: 8px;
}
</style>
