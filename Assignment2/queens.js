class QueenAttack {
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }
    canAttack(x_other,y_other){
        // vertical check
        if(this.x==x_other){
            return true
        
        }
        //horizontal check
        else if(this.y==y_other){
            return true
        }
        // check for diagonals parallel to diagonal[(0,7)--->(7,0)]
        else if ((this.x+this.y)==(x_other+y_other)){
            return true
        }
        // check for diagonals parallel to diagonal[(0,0)--->(7,7)]
        else{
            var x_copy=x_other;
            var y_copy=y_other;
            //checking diagonally upwards
            while(x_other>=0&&y_other>=0){
                if(x_other==this.x&&y_other==this.y){
                    return true;
                    
                }
                x_other--;y_other--;
            }
            x_other=x_copy;
            y_other=y_copy;
            //checking diagonally downwards
            while(x_other<=7&&y_other<=7){
                if(x_other==this.x&&y_other==this.y){
                    return true;
                    
                }
                x_other++;y_other++;
            }
            return false;
        }
    }
};

Queen1=new QueenAttack(3,2);
Queen2=new QueenAttack(4,5);

if(Queen1.canAttack(Queen2.x,Queen2.y)){
    console.log("Both Queens can Attack each other")
}
else{
    console.log("Both Queens cannot Attack each other")
}