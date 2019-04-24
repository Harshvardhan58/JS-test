import {observable,action} from 'mobx';
class CounterStore{
    @observable counters=[];
    @observable counterCount={};
    @action addCounter = ()=>{
        let id  = this.counters.length ? this.counters[this.counters.length-1] : 0;
        this.counters.push(++id);
        this.counterCount[id]=0;
    }
    @action deleteCounter = (id)=>{
        this.counters = this.counters.filter(i=>i!==id);
        delete this.counterCount[id];
    }
    @action increment = (id)=>{
        this.counterCount[id]++;
    }
    @action decrement = (id) =>{
        this.counterCount[id]--;
    }
}
const counterStore = new CounterStore();
export default counterStore;