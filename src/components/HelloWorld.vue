<template>
  <div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Add New Form</h3>
                <label for="bookTitle">Title:</label>
                
                <input type="text" v-model="newForm" class="form-control">
                <br>
                <button type="button" class="btn btn-info" v-on:click="addTodo()">
                    Add Form
                </button> 
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Form List</h3>
                <button type="button" class="btn btn-warning" v-on:click="loadTodo()"> Load Form </button><br><br>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Detail</th>
                            <th scope="col">Time</th>
                            <th scope="col">Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(todo) in todos" v-bind:key="todo.id"> 
                            <td>{{todo.task}}</td>
                            <td>{{todo.timestamp}}</td>
                            <td>
                                <button class="btn btn-danger" v-on:click="removeTodo(todo.id)"> Delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table> 
        </div>
    </div>
  </div>
</template>
<style>
     @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
  tr:hover {
    background-color:#eeeeee;
    cursor: pointer;
  }
</style>
