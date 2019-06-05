This repo aims build a solution for handling with database queries.

* Scenario
 - View(Reactjs) + Database(Firebase) + State(Redux)
 
* Problems
  - High acouplated beetwen view, database query and state.
    - View needs call a retrive/get/listener for db, that on `.then` method set redux with res data.
    - For example, function that  will should be only one thing: `getDepartments`, in fact it will retriave departments and set them on redux.
    - Views need all the time, turn on subscribe and turn off, which means that if one user open that page 100 times in day, are 100 read operations in db. It's expensive. Spends user time. Spends internet. Spends db cost.
    
 * Solution - Caretaker :)
   - All queries from site in one place with dynamically management.
   - Define queries in route
   - store active listeners 
     - Only kill by determinate of unused time
     - Only call "sleep" listeners and never call a active.
   - View don't need turn on listener in `didMount` and turn off in `willUnmount`
   - Functions like `getDepartments` wont set a redux. Just return `departaments`
   - Error handling 
