import { useEffect, useState } from "react";
import { getDatabase, ref, get, query, orderByKey } from "firebase/database";

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();
            const answerRef = ref(db, `answers/${videoID}/questions`)
            const answerQuery = query(
                answerRef,
                orderByKey(),
            )
            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(answerQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => {
                        return [...prevAnswers, ...Object.values(snapshot.val())]
                    })
                } else {
                    //
                }
            }
            catch (e) {
                console.log(e);
                setError(true);
            }
        }
        fetchAnswers()
    }, [videoID])

    return {
        loading,
        error,
        answers
    }
}