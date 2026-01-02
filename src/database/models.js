const mongoose = require("mongoose");
//llook at schema for chatgpt
const MyUserSchema = new mongoose.Schema( {
    user_id: {
      type: 'Number',
      required: true
    },
    username: {
      type: 'String',
      required: true
    },
    name: {
      type: 'String',
      required: true
    },
    password: {
      type: 'String',
      require: true
    }
  });
  
  const MyConversationSchema = new mongoose.Schema( {
    message_id: {
      type: 'Number',
      required: true
    },
    who: {
      type: 'String',
      required: true
    },
    when: {
      type: 'Date',
      required: true
    },    
    dialog: {
      type: 'String',
      required: true
    }
  });

  const test = new mongoose.Schema( {
    key_id: {
      type: 'String',
      required: true
    },
    text: {
      type: 'String',
      required: true
    },
    when: {
      type: 'Date',
      required: true
    },
    class: {
      type: 'String',
      required: true
    },
    completed: {
      type: 'Boolean',
      required: true
    }

  });



export const my_users = mongoose.models.users || mongoose.model("users", MyUserSchema);
export const my_conversation = mongoose.models.conversation || mongoose.model("conversation", MyConversationSchema);
export const my_test = mongoose.models.test || mongoose.model("test", test);  

export default my_users;
