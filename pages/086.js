pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        content: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField1: function(value){
      this.$parent.saveData('how-did-it-make-you-feel-stored', value);
    },
    checkContent: function() {
      if (this.inputfield1.length > 1)  {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['how-did-it-make-you-feel-stored']){
      this.inputfield1 = this.exerciseData['how-did-it-make-you-feel-stored'];
      this.content = true;
    }

  }


}
