arrayList = ["Hi","Hello","Hey","How are you?","Wassup?"]

exports.getArrayItem = function(){
    return arrayList[Math.floor(Math.random() * 5)];
};
