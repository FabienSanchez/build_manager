<template>
  <div>

    <b-btn v-b-modal="'myModal'" variant="success">
      <fa icon="plus-circle"/>
      Add
    </b-btn>

    <!--<b-modal id="myModal" @ok="addBuild">-->
    <!--<b-form>-->
    <!--<b-form-group horizontal-->
    <!--label="Add build"-->
    <!--label-size="lg"-->
    <!--label-class="font-weight-bold pt-0"-->
    <!--class="mb-0">-->

    <!--<b-form-group horizontal-->
    <!--label="Name:"-->
    <!--label-class="text-sm-right">-->
    <!--<b-form-input placeholder="Name your build"-->
    <!--v-model="card.name"></b-form-input>-->
    <!--</b-form-group>-->

    <!--<b-form-group horizontal-->
    <!--label="JSON:"-->
    <!--label-class="text-sm-right">-->
    <!--<b-form-textarea placeholder="Data"-->
    <!--v-model="card.data"></b-form-textarea>-->
    <!--</b-form-group>-->
    <!--</b-form-group>-->
    <!--</b-form>-->
    <!--</b-modal>-->

    <cards :collection="builds"></cards>

  </div>
</template>

<script>
  import Cards from "./Cards";

  export default {
    name: "Main",
    components: {Cards},
    data() {
      return {
        count: 0,
        builds: JSON.parse(localStorage.getItem('builds')) || [],
        card: {
          name: "",
          data: ""
        },
      }
    },
  }
</script>

<style scoped>

</style>
