import Araba from '@/Araba.js'

class Model extends Araba {
    constructor(adi,yili){
        super(adi),
        this.yili = yili
    }

    show(){
        return this.present() + ', model yili  ' + this.yili;
    }
}

export default Model