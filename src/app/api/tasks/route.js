import { NextResponse } from 'next/server';
import my_user_model, {my_test} from "../../../database/models";
import db_connect from "../../../database/db-connection";

const db = db_connect();
const taskToSend = [];


export async function POST(req) {



  const { task, due, fetch, classNum, taskCompletePost } = await req.json();

  if (taskCompletePost) {

    console.log(taskCompletePost);

    async function setTaskComplete() {

    const completeTask = await my_test.collection.findOneAndUpdate({text: taskCompletePost}, {$set: {completed: true}}, {new: true});
    
    console.log(completeTask);

    }

    setTaskComplete();


    return NextResponse.json({completed: "completeTask"});
  }

  if (task) {
    console.log("TASK SENT");
    const date = new Date();//quick get time for message timing 
    const showTime = (("0"+date.getHours()).slice(-2)) + ':' + (("0"+date.getMinutes()).slice(-2)) + ":" + (("0"+date.getSeconds()).slice(-2));

    // const max_id_results = await my_test.find({}).sort({ id: -1 }).limit(1);//BROKEN - this will ensure the DB always has message ID's incrementing properly
    //   console.log('1: '+max_id_results);

    //   console.log('2: '+max_id_results[0].key_id);
    //   console.log('res: '+result);

    // let next_message_id = max_id_results[0].key_id + 1;
    //   console.log(next_message_id);
    taskToSend.splice(0,1, 
      {key_id: Math.round(
        (Math.random()*(1, 1000000))), 
          text: task, 
          when: showTime, 
          class: classNum,
          due: due,
          completed: false});

    await my_test.collection.insertOne(taskToSend[0]);
    
    return NextResponse.json({job: "done"});
  }

  if (fetch) {

    let convoData = [];
    const startupData = [];


    if (convoData.length === startupData.length) {

      convoData = await my_test.find({});

      for (let i = 0; i < convoData.length; i++ ) {
            startupData.push(convoData[i]);
          }
          console.log(convoData);
    }
 

    return NextResponse.json({messages: startupData});    
  }






    return NextResponse.json({message: "Recieved"});

}


  
