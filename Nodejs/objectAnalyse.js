// const math = require('mathjs')

let data = {
    "static-10.9.200.23-sz": {
        "file_|-sync_static_|-/data/static/mall/quiz-game_|-recurse": {
            "comment": "Recursively updated /data/static/mall/quiz-game",
            "pchanges": {},
            "name": "/data/static/mall/quiz-game",
            "start_time": "16:08:10.153483",
            "result": true,
            "duration": 1287.786,
            "__run_num__": 1,
            "__sls__": "ued.staticupdate",
            "changes": {
                "/data/static/mall/quiz-game/css/main_b1189f9.css": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/js": {
                    "/data/static/mall/quiz-game/js": "New Dir"
                },
                "/data/static/mall/quiz-game/index.html": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/manifest.json": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/js/main_03aa998.js": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/css": {
                    "/data/static/mall/quiz-game/css": "New Dir"
                }
            },
            "__id__": "sync_static"
        },
        "cmd_|-backup_static_|-cp -rf /data/static/mall /data/backup/mall/20180620151349_|-run": {
            "comment": "",
            "name": "cp -rf /data/static/mall /data/backup/mall/20180620151349",
            "start_time": "16:08:06.595570",
            "result": true,
            "duration": 3550.247,
            "__run_num__": 0,
            "__sls__": "ued.staticupdate",
            "changes": {},
            "__id__": "backup_static"
        }
    },
    "static-10.39.28.159-sz": {
        "cmd_|-backup_static_|-cp -rf /data/static/mall /data/backup/mall/20180620151311_|-run": {
            "comment": "",
            "name": "cp -rf /data/static/mall /data/backup/mall/20180620151311",
            "start_time": "16:08:06.174127",
            "result": true,
            "duration": 3648.55,
            "__run_num__": 0,
            "__sls__": "ued.staticupdate",
            "changes": {},
            "__id__": "backup_static"
        },
        "file_|-sync_static_|-/data/static/mall/quiz-game_|-recurse": {
            "comment": "Recursively updated /data/static/mall/quiz-game",
            "pchanges": {},
            "name": "/data/static/mall/quiz-game",
            "start_time": "16:08:09.829823",
            "result": true,
            "duration": 1314.586,
            "__run_num__": 1,
            "__sls__": "ued.staticupdate",
            "changes": {
                "/data/static/mall/quiz-game/css/main_b1189f9.css": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/js": {
                    "/data/static/mall/quiz-game/js": "New Dir"
                },
                "/data/static/mall/quiz-game/index.html": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/manifest.json": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/js/main_03aa998.js": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/css": {
                    "/data/static/mall/quiz-game/css": "New Dir"
                }
            },
            "__id__": "sync_static"
        }
    },
    "static-10.9.200.16-sz": {
        "file_|-sync_static_|-/data/static/mall/quiz-game_|-recurse": {
            "comment": "Recursively updated /data/static/mall/quiz-game",
            "pchanges": {},
            "name": "/data/static/mall/quiz-game",
            "start_time": "16:08:15.946450",
            "result": true,
            "duration": 1335.987,
            "__run_num__": 1,
            "__sls__": "ued.staticupdate",
            "changes": {
                "/data/static/mall/quiz-game/css/main_b1189f9.css": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/js": {
                    "/data/static/mall/quiz-game/js": "New Dir"
                },
                "/data/static/mall/quiz-game/index.html": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/manifest.json": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/js/main_03aa998.js": {
                    "diff": "New file",
                    "mode": "0644"
                },
                "/data/static/mall/quiz-game/css": {
                    "/data/static/mall/quiz-game/css": "New Dir"
                }
            },
            "__id__": "sync_static"
        },
        "cmd_|-backup_static_|-cp -rf /data/static/mall /data/backup/mall/20180620151240_|-run": {
            "comment": "",
            "name": "cp -rf /data/static/mall /data/backup/mall/20180620151240",
            "start_time": "16:08:06.504898",
            "result": true,
            "duration": 9432.118,
            "__run_num__": 0,
            "__sls__": "ued.staticupdate",
            "changes": {},
            "__id__": "backup_static"
        }
    }
};

function getJobResults(source) {
    let backupCMD = /-backup_static_/;
    let syncCMD = /-sync_static_/;
    let syncJobDurationSum = 0;
    let backupJobDurationSum = 0;
    let newFilesArray = [];
    Reflect.ownKeys(source).forEach(function (ele) {
        // targetServer example: static-10.9.200.16-sz: {}
        let targetServer = source[ele];
        Reflect.ownKeys(targetServer).forEach(function (jobInfo) {
            // jobInfo example: file_|-sync_static_|-/data/static/mall/quiz-game_|-recurse: {}
            if (syncCMD.test(jobInfo)) {
                syncJobDurationSum += targetServer[jobInfo].duration;
                let newFiles = Reflect.ownKeys(targetServer[jobInfo].changes).filter(function(changedObjectKey) {
                    /* example object for targetServer[jobInfo].changes[changedObjectKey]
                    "/data/static/mall/quiz-game/js/main_03aa998.js": {
                        "diff": "New file",
                        "mode": "0644"
                    },
                    "/data/static/mall/quiz-game/css": {
                        "/data/static/mall/quiz-game/css": "New Dir"
                    }
                    */
                    if ( targetServer[jobInfo].changes[changedObjectKey]['diff'] === 'New file')
                        return true;
                    else return false;
                });
                newFilesArray = newFilesArray.concat(newFiles);
            } else {
                backupJobDurationSum += targetServer[jobInfo].duration;
            }
        })
    });
    console.log(syncJobDurationSum, backupJobDurationSum)
    newFilesArray = [...new Set(newFilesArray)];
    console.log(newFilesArray);
    return {
        syncJobDurationSum,
        backupJobDurationSum,
        newFilesArray
    }
};

let re = getJobResults(data);
console.log(re)