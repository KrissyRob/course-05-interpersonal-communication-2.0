pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      module1: false,
      module2:false,
      modulesComplete: false
    }
  },
  methods: {
    // Any page specific methods go here.
    prevButton: function() {
      if ((this.module1 == false) && (this.module2 == false)) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '047';},400);
      }
      else if ((this.module1 == true) && (this.module2 == false)) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '050';},400);
      }
      else if ((this.module1 == true) && (this.module2 == true)) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '055';},400);
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    console.log(this.exerciseData['page.max']);
    var currentPage = this.exerciseData['page.max']
    if (currentPage >= 50) {
      this.module1 = true;
    }
    if (currentPage >= 55) {
      this.module2 = true;
    }
    if((this.module1 == true) && (this.module2 == true)) {
      this.modulesComplete = true;
    }



  }


}
