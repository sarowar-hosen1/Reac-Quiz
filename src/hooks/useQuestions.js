import { useEffect, useState } from "react";
import { getDatabase, ref, get, query, orderByKey } from "firebase/database";

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function loadQeustions() {
            const db = getDatabase();
            const questionRef = ref(db, `quiz/${videoID}/questions`)
            const questionQuery = query(
                questionRef,
                orderByKey(),
            )
            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(questionQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                    })
                } else {
                    //
                }
            }
            catch (e) {
                console.log(e);
                setError(e);
            }
        }
        loadQeustions()
    }, [videoID])

    return {
        loading,
        error,
        questions
    }
}