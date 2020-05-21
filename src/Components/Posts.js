import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchData, fetchRequest} from '../Redux/Posts/postActions'

function Posts({fetchData,postsData}) {
   
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            Al Posts
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        postsData:state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Posts)