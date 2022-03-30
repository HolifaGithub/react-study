import {observable, autorun, runInAction} from 'mobx';


export default function PageA(){
    // var todoStore = observable({
    //     /* 一些观察的状态 */
    //     todos: [],
    
    //     /* 推导值 */
    //     get completedCount() {
    //         return this.todos.filter(todo => todo.completed).length;
    //     }
    // });
    
    // /* 观察状态改变的函数 */
    // autorun(function() {
    //     console.log("Completed %d of %d items",
    //         todoStore.completedCount,
    //         todoStore.todos.length
    //     );
    // });

    // runInAction(() => {
    //     todoStore.todos.push({  completed: false, text: 'Learn MobX' });
    // }) 

    return (
        <div>
            PageA
        </div>
    )
}