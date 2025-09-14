//Zustand is a state management library used to manage
// your app's data in React and Next.js. It's fast 
// and easy to use, allowing you to share information between components without a lot of extra code

import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}) ,
  messeges:[],
  setMesseges:(messege)=>set({messege}),
}));

export default useConversation;