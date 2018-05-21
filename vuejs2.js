let styleObject = {
    maxWidth: '100%',
    overflow: 'hidden',
    backgroundColor: 0x00d8ff,
    border: '1px solid red',
    display: 'block'
}

// Variables d'application: page1 et page2
let page1 = {
  name: 'page1',
  template: ` <div class="row" >
               <div class="col-4">
                            <!-- Optional Classes: [callout radius] -->
                              <div class="panel">
                                  <h5>This is a callout panel Red 1.</h5>
                                  <p>It's a little ostentatious, but useful for important content.</p>
                              </div>
                         </div>
                          <div class="col-4">
                           <img class="mx-auto d-block" src="bouteille_1_3.png" alt="vin1">
                         </div>
                         <div class="col-4">
                           <ul class="pricing-table">
                            <li class="title">Standard</li>
                            <li class="price">$199.99</li>
                            <li class="description">An awesome description varias lorem consequat ita malis sed domesticarum arbitrantur</li>
                            <li class="bullet-item">1 Database</li>
                            <li class="bullet-item">5GB Storage</li>
                            <li class="bullet-item">20 Users</li>
                            <li class="cta-button"><a class="button" href="#">Buy Now</a></li>
                          </ul>
                      </div>
            </div>`,
  props: ['title'],
}

let page2 = {
    name: 'page2',
    template:
            `<div class="row" >
            <div class="col-4">
              <ul class="pricing-table">
               <li class="title">Standard</li>
               <li class="price">$99.99</li>
               <li class="description">An awesome description varias lorem consequat ita malis sed domesticarum arbitrantur</li>
               <li class="bullet-item">1 Database</li>
               <li class="bullet-item">5GB Storage</li>
               <li class="bullet-item">20 Users</li>
               <li class="cta-button"><a class="button" href="#">Buy Now</a></li>
             </ul>
            </div>
            <div class="col-4">
              <img  class="mx-auto d-block" src="bouteille_2_3.png" alt="vin1">
            </div>
             <div class="col-4">
               <!-- Optional Classes: [callout radius] -->
                 <div class="panel">
                     <h5>This is a callout panel Yellow 2.</h5>
                     <p>It's a little ostentatious, but useful for important content.</p>
                 </div>
            </div>
        </div>`,
  props: ['title']  
}

let vm = new Vue({
    el:'#app',
    components: {
        page1,
        page2,
        styleObject
    },
    data :{ 
            index: {page1: page1, page2: page2},
            Y:'',
            X:'',
            screenWidth:'',
            message:'Bonjour le net',
            change: true,
            styleObject:{display: 'none'},
            styleObject2:{display: 'block'}
    },
    methods: {
     mouseMouve (e) {
        //  console.log('mousemouve')
        this.X = e.pageX
        this.Y = e.pageY
        //  this.screenWidth = e.windowinnerWidth
         if (this.X < 600) {
             this.styleObject2 = {
                display: 'block'
            }
            this.styleObject = {
                display: 'none'
            }
         } else if (this.X < 750) {
             this.styleObject = {
                maxWidth: this.X + 'px',
                overflow: 'hidden',
                backgroundColor: 0x3f2da2,
                display: 'block'
            }
             this.styleObject2 = {
                
            }
         } else if (this.X > 755) {
             this.styleObject2 = {
                display: 'none'
            }
            this.styleObject = {
                maxWidth: '100%',
                overflow: 'visible',
                backgroundColor: 0x3f2da2,
                display: 'block',
                position: 'absolute'
            }
 
             
         }
     }
    }
})
