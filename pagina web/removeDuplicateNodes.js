process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

//This is how to create a node in js:
function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){
 //still don't know why the word "this" is written here.
    this.removeDuplicates=function(head){
     if (head == null){
        return null
      }
     let aux = head;
     while (aux.next != null){
        if (aux.data === aux.next.data){
           aux.next = aux.next.next;
        } else {
             aux = aux.next;
           }
      }
     return head
  }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

//this is the main. I didn't know js had a "main" and what's all this inside.
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		