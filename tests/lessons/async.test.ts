

function getArticle(id){
    const article = get.fetch()
}

function createVideo(){
    console.log('New Video');
};

function rejected(){
    console.log('No video')
};

const videoPromise = new Promise((createVideo, rejected) => {
    const responce = fetch.get('/bugaga');

    if(responce === false){
        createVideo()
    } else {
        rejected()
    }
})

new Promise(() => {
    return true
}, ()=> { return false}).then((result) => {console.log(result)}).finally();

try{} catch (e){} finally {

}