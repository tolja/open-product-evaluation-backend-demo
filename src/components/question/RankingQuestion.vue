<template>

  <div class="card">
    <div class="card-header">
      Frage {{(questionCounter+1)}}/{{questionLength}}
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col-12"><h4>{{currentQuestion.value}}</h4></div>
        </div>
        <div class="row">
          <div class="col-12"> {{currentQuestion.description}}  <p></p></div>

        </div>

              <draggable :list="rankedItems">
                <div class="image-list" v-for="item in rankedItems" :key="item.id">
              <img class="image" v-bind:src="item.image.url" />
                  <div class="row">
                    <div class="col">
                          <label v-bind:for="item.id"> {{item.label}}</label>
                    </div>
                  </div>
                </div>
              </draggable>


        <div class="row justify-content-center">
          <div class="col">
            <p></p>
            <h4>Aktuelle Reihenfolge:</h4>
          </div>
        </div>
        <div class="row justify-content-center">
          <div>
            <ul class="item-list">
              <li  v-for="(item,index) in rankedItems" :key="item.id"><strong>Position {{(index+1)}}:</strong> {{item.label}}</li>
              </ul>
          </div>
            </div>
        <div class="row">
          <div class="col-12">
            <p><button type="submit" v-on:click.prevent="createRankingAnswer()" class="btn btn-primary">Antwort senden</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import draggable from 'vuedraggable'
  import Router from '@/router';
  export default {
    name: "RankingQuestion",
    data() {
      return {
        rankedItems: [],
        rankedIDs: []
      }
    },
    components: {
      draggable
    },
    props: ['currentQuestion','questionCounter','questionLength'],
    created: function() {
      this.getItemData();
    },
    computed: {
    },
    methods: {
      createRankingAnswer() {
        this.setRankingIDs();
        this.$store.dispatch('createRankingAnswer',{ questionID: this.currentQuestion.id, rankedItems: this.rankedIDs } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
      getItemData() {
        this.currentQuestion.items.forEach((item) => {
          this.rankedItems.push(item);
        })
      },
      setRankingIDs() {
        this.rankedItems.forEach((item) => {
          this.rankedIDs.push(item.id);
        })
      }
    }
  }
</script>

<style scoped>

  .image-list {
    display: inline-block;
  }

  .item-list {
    text-align:center;
    list-style-type: none;
    padding: 0;
  }

  .item-list:not(:last-child) {
    margin-right: 20px;
  }

  .image-list .image {
    width:300px;
    height:200px;
    margin-bottom:15pt;
  }
  .image-list:not(:last-child) .image{
    margin-right:10px;
  }
</style>
