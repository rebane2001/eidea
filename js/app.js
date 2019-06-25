baseurl = "https://status.sk.ee/v1/"
mobiilidjsons = [//["jsonfail","displeinimi"]
    ["emt.json","Telia (EE)"],
    ["elisa.json","Elisa (EE)"],
    ["tele2ee.json","Tele2 (EE)"],
    ["telia_sk_lt.json","Telia (LT)"],
    ["tele2lt.json","Tele2 (LT)"],
    ["tele2_sk_lt.json","Tele2 (LT)"], //dunno why there's two of them
    ["bite_sk_lt.json","Bite (LT)"]
] 
smartidjson = "smart.json"

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function updateStatus(){
    document.getElementById("mobiilid").innerHTML = "";
    mobiilidstatus = [];
    mobiilidjsons.forEach(function(mobiilidjson){
        a = "";
        $.getJSON(baseurl + mobiilidjson[0] + "?callback=", function(data) {
            a = data;
        });
        console.log(a);
        document.getElementById("mobiilid").innerHTML += mobiilidjson[0];
    });
}