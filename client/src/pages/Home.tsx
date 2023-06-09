import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPosts } from "../redux/post/getPost/getPost.action";
import { RootState } from "../redux/store";
import { useCallback, useEffect } from "react"
import styles from "../styles/Home.module.css";
import Post from "../components/post/Post";
import { CarDetailsProps } from "../constant/constant";
import Loader from "../components/Loader";


const Home = () => {
    const { allPosts, loading } = useSelector((store: RootState) => store.getPosts);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div className={styles.container}>
            {loading && <Loader />}
            {allPosts.length !== 0 &&
                allPosts?.map((post: CarDetailsProps) => <Post key={post._id} {...post} />)
            }
        </div>
    )
}

export default Home