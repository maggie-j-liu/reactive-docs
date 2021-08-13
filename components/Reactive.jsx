import { useEffect } from "react";
import reactive from "@maggieliu/reactive";

export default function Reactive() {
  useEffect(() => {
    reactive.install({
      firebaseConfig: {
        apiKey: "AIzaSyAux7Beoq9hQiT4TgQGnyNWR3_BwTukmaU",
        authDomain: "reactive-db9e1.firebaseapp.com",
        databaseURL: "https://reactive-db9e1-default-rtdb.firebaseio.com",
        projectId: "reactive-db9e1",
        storageBucket: "reactive-db9e1.appspot.com",
        messagingSenderId: "248078740379",
        appId: "1:248078740379:web:bebe06abacef70e4b50f3e",
      },
      page: "reactive-docs",
      reactionText:
        "Hope you enjoyed this project and that Reactive is useful for you!",
      reactions: ["🦄", "😎", "😇", "😼", "😍", "🤩"],
      paymentPointer: "$ilp.uphold.com/D7BwPKMQzBiD",
    });
  }, []);
  return <div id="reactive_widget"></div>;
}
