<template>
  <b-card-group id="cards-container" columns>
    <b-card v-for="(build, i) in collection"
            :key="build.id"
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white">

      <div slot="header">
        <b-button-close @click="delBuild(i)"></b-button-close>
        <h4>{{ build.name }}</h4>
      </div>

      <div>
        Content
      </div>
      <!--<div v-if="build.valid">-->
      <!--<div v-for="(value, key) in build.data">-->
      <!--<u>{{ key }} :</u>-->
      <!--<span v-for="val in value"> {{ val[0] }},</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div v-else>Invalid JSON structure</div>-->

      <div slot="footer">
        <b-btn v-b-tooltip.hover title="Click to copy" size="sm" variant="primary" @click="clipCopy(build)">
          <small>Export</small>
        </b-btn>
      </div>

    </b-card>
  </b-card-group>
</template>

<script>
  export default {
    name: "Cards",
    props: ['collection'],
    watch: {
      collection(self) {
        localStorage.setItem('collection', JSON.stringify(self));
      }
    },
    methods: {
      clipCopy(build) {
        let tmp = build.valid ? JSON.stringify(build.data) : build.data;
        let aux = document.createElement("input");
        aux.setAttribute("value", tmp);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
      },
      delBuild(index) {
        this.collection.splice(index, 1);
      },
      addBuild() {
        let data = this.card.data;
        let valid = false;

        try {
          data = JSON.parse(data);
          valid = true;
        } catch (e) {
        }

        let newBuild = {
          id: btoa(this.card.name + this.count++),
          valid: valid,
          name: this.card.name,
          data: data,
        };

        this.card = {};
        this.collection.push(newBuild);
      },
    }
  }
</script>

<style scoped>

</style>
