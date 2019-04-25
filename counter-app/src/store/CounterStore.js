import {observable,action,computed} from 'mobx';
class Counter{
    @observable count =0 ;
    
    @action
    increment() {
        this.count = this.count +1;  
    }
    @action
    decrement() {
        this.count = this.count -1;
    }
}
class CounterStore{
    @observable counters=[];

    @action addCounter = ()=>{
        this.counters.push(new Counter());
    }
    @action deleteCounter = (idx)=>{
        this.counters.splice(idx,1);
    }

    @computed get getCount(){
        return this.counters.length;
    }
    @computed get getMax(){
        let max = this.getCount ? this.counters[0].count : false;
        for(let i=1;i<this.counters.length;i++){
            if(this.counters[i].count > max){
                max = this.counters[i].count;
            }
        }
        return max;
    }
}
const counterStore = new CounterStore();
export default counterStore;