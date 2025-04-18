(() => {
    const content = `(l4d2-mod-manager) $ vim start.sh 
(l4d2-mod-manager) $ vim s
(l4d2-mod-manager) $ vim s
server_manager/ start.sh        
(l4d2-mod-manager) $ vim start.sh 
(l4d2-mod-manager) $ bash s
server_manager/ start.sh        
(l4d2-mod-manager) $ bash start.sh 
Operations to perform:
  Apply all migrations: auth, contenttypes, mod_manager, server_manager, sessions
Running migrations:
  No migrations to apply.
Performing system checks...

System check identified no issues (0 silenced).
April 19, 2025 - 04:56:26
Django version 5.2, using settings 'l4d2_mod_manager.settings'
Starting development server at http://127.0.0.1:25021/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
[19/Apr/2025 04:56:27] "GET / HTTP/1.1" 302 0
[19/Apr/2025 04:56:27] "GET /login/?next=/ HTTP/1.1" 200 1071
[19/Apr/2025 04:56:28] "GET /static/mod_manager/css/global.css HTTP/1.1" 304 0
[19/Apr/2025 04:56:34] "POST /login/?next=%2F HTTP/1.1" 302 0
[19/Apr/2025 04:56:35] "GET / HTTP/1.1" 200 174427
[19/Apr/2025 04:56:36] "GET /server_manager/ HTTP/1.1" 200 3510
[19/Apr/2025 04:56:36] "GET /static/server_manager/css/index.css HTTP/1.1" 304 0
[19/Apr/2025 04:56:36] "GET /static/server_manager/js/index.js HTTP/1.1" 304 0
Performing system checks...

System check identified no issues (0 silenced).
April 19, 2025 - 04:57:00
Django version 5.2, using settings 'l4d2_mod_manager.settings'
Starting development server at http://127.0.0.1:25021/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
^C(l4d2-mod-manager) $ bash start.sh 
Operations to perform:
  Apply all migrations: auth, contenttypes, mod_manager, server_manager, sessions
Running migrations:
  No migrations to apply.
Performing system checks...

System check identified no issues (0 silenced).
April 19, 2025 - 04:58:05
Django version 5.2, using settings 'l4d2_mod_manager.settings'
Starting development server at http://127.0.0.1:25021/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
[19/Apr/2025 04:58:07] "GET /server_manager/ HTTP/1.1" 302 0
[19/Apr/2025 04:58:07] "GET /login/?next=/server_manager/ HTTP/1.1" 200 1088
[19/Apr/2025 04:58:15] "POST /login/?next=%2Fserver_manager%2F HTTP/1.1" 302 0
--------------------------------------------------------------------------------
None
--------------------------------------------------------------------------------
[19/Apr/2025 04:58:15] "GET /server_manager/ HTTP/1.1" 200 3510
^C(l4d2-mod-manager) $ bash connect_db.sh 
-- Loading resources from /tmp/tmp.H0o5Qk9yvY
auth_group                    django_admin_log            
auth_group_permissions        django_content_type         
auth_permission               django_migrations           
auth_user                     django_session              
auth_user_groups              mod_manager_subscribetask   
auth_user_user_permissions    server_manager_operationinfo
SQLite version 3.45.3 2024-04-15 13:34:05
Enter ".help" for usage hints.
sqlite> select * from server_manager_operationinfo;
sqlite> .quit
(l4d2-mod-manager) $ bash connect_db.sh 
-- Loading resources from /tmp/tmp.C8qRlkbMXR
auth_group                    django_admin_log            
auth_group_permissions        django_content_type         
auth_permission               django_migrations           
auth_user                     django_session              
auth_user_groups              mod_manager_subscribetask   
auth_user_user_permissions    server_manager_operationinfo
SQLite version 3.45.3 2024-04-15 13:34:05
Enter ".help" for usage hints.
sqlite> .quit
(l4d2-mod-manager) $ bash start.sh 
Operations to perform:
  Apply all migrations: auth, contenttypes, mod_manager, server_manager, sessions
Running migrations:
  No migrations to apply.
Performing system checks...

System check identified no issues (0 silenced).
April 19, 2025 - 05:07:54
Django version 5.2, using settings 'l4d2_mod_manager.settings'
Starting development server at http://127.0.0.1:25021/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
[19/Apr/2025 05:07:55] "GET /server_manager/ HTTP/1.1" 302 0
[19/Apr/2025 05:07:55] "GET /login/?next=/server_manager/ HTTP/1.1" 200 1088
[19/Apr/2025 05:08:00] "POST /login/?next=%2Fserver_manager%2F HTTP/1.1" 302 0
[19/Apr/2025 05:08:00] "GET /server_manager/ HTTP/1.1" 200 3526
[19/Apr/2025 05:08:02] "GET /server_manager/ HTTP/1.1" 200 3526
[19/Apr/2025 05:08:05] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:08:09] "GET / HTTP/1.1" 200 174427
[19/Apr/2025 05:08:09] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:08:09] "GET /static/mod_manager/css/index.css HTTP/1.1" 200 3466
[19/Apr/2025 05:08:09] "GET /static/mod_manager/js/index.js HTTP/1.1" 200 521
[19/Apr/2025 05:08:09] "GET /favicon.ico HTTP/1.1" 404 179
^C(l4d2-mod-manager) $ bash start.sh 
Operations to perform:
  Apply all migrations: auth, contenttypes, mod_manager, server_manager, sessions
Running migrations:
  No migrations to apply.
Performing system checks...

System check identified no issues (0 silenced).
April 19, 2025 - 05:09:01
Django version 5.2, using settings 'l4d2_mod_manager.settings'
Starting development server at http://127.0.0.1:25021/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
[19/Apr/2025 05:09:02] "GET /server_manager/ HTTP/1.1" 302 0
[19/Apr/2025 05:09:02] "GET /login/?next=/server_manager/ HTTP/1.1" 200 1088
[19/Apr/2025 05:09:02] "GET /static/mod_manager/css/login.css HTTP/1.1" 200 1514
[19/Apr/2025 05:09:02] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:09:02] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:09:09] "POST /login/?next=%2Fserver_manager%2F HTTP/1.1" 302 0
[19/Apr/2025 05:09:09] "GET /server_manager/ HTTP/1.1" 200 3526
[19/Apr/2025 05:09:09] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:09:09] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:09:09] "GET /static/server_manager/css/index.css HTTP/1.1" 200 249
[19/Apr/2025 05:09:09] "GET /favicon.ico HTTP/1.1" 404 179
^C(l4d2-mod-manager) $ bash start.sh 
Operations to perform:
  Apply all migrations: auth, contenttypes, mod_manager, server_manager, sessions
Running migrations:
  No migrations to apply.
Performing system checks...

System check identified no issues (0 silenced).
April 19, 2025 - 05:12:06
Django version 5.2, using settings 'l4d2_mod_manager.settings'
Starting development server at http://127.0.0.1:25021/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
[19/Apr/2025 05:12:08] "GET /server_manager/ HTTP/1.1" 302 0
[19/Apr/2025 05:12:08] "GET /login/?next=/server_manager/ HTTP/1.1" 200 1088
[19/Apr/2025 05:12:13] "POST /login/?next=%2Fserver_manager%2F HTTP/1.1" 302 0
[19/Apr/2025 05:12:13] "GET /server_manager/ HTTP/1.1" 200 3787
[19/Apr/2025 05:12:13] "GET /static/server_manager/css/index.css HTTP/1.1" 304 0
[19/Apr/2025 05:12:15] "GET /server_manager/ HTTP/1.1" 200 3787
[19/Apr/2025 05:12:16] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:12:30] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:12:30] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:12:30] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:12:30] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:12:30] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:12:35] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:13:53] "GET /server_manager/ HTTP/1.1" 200 3837
[19/Apr/2025 05:13:53] "GET /static/server_manager/css/index.css HTTP/1.1" 200 291
[19/Apr/2025 05:13:53] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:13:53] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:13:53] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:14:56] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:14:57] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:14:57] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:14:57] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:14:57] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:15:59] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:16:00] "GET /server_manager/ HTTP/1.1" 200 3837
[19/Apr/2025 05:16:00] "GET /static/server_manager/css/index.css HTTP/1.1" 200 527
[19/Apr/2025 05:16:00] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:16:00] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:16:00] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:16:10] "GET /server_manager/ HTTP/1.1" 200 3837
[19/Apr/2025 05:16:10] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:16:10] "GET /static/server_manager/css/index.css HTTP/1.1" 200 548
[19/Apr/2025 05:16:10] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:16:10] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:16:11] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:17:11] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:17:12] "GET /server_manager/ HTTP/1.1" 200 3837
[19/Apr/2025 05:17:12] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:17:12] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:17:12] "GET /static/server_manager/css/index.css HTTP/1.1" 200 696
[19/Apr/2025 05:17:12] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:17:17] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:17:18] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:17:20] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:17:21] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:21:11] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:21:11] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:21:11] "GET /static/server_manager/css/index.css HTTP/1.1" 200 696
[19/Apr/2025 05:21:11] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:21:11] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:21:55] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:21:55] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:21:55] "GET /static/server_manager/css/index.css HTTP/1.1" 200 788
[19/Apr/2025 05:21:55] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:21:55] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:22:18] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:22:18] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:22:18] "GET /static/server_manager/css/index.css HTTP/1.1" 200 836
[19/Apr/2025 05:22:18] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:22:18] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:22:59] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:22:59] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:22:59] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:22:59] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:22:59] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:23:01] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:23:58] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:23:58] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:23:58] "GET /static/server_manager/css/index.css HTTP/1.1" 200 910
[19/Apr/2025 05:23:58] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:23:58] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:24:07] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:24:07] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:24:07] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:24:07] "GET /static/server_manager/css/index.css HTTP/1.1" 200 909
[19/Apr/2025 05:24:07] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:25:25] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:25:25] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:25:25] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:25:25] "GET /static/server_manager/css/index.css HTTP/1.1" 200 964
[19/Apr/2025 05:25:25] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:25:59] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:25:59] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:25:59] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:25:59] "GET /static/server_manager/css/index.css HTTP/1.1" 200 964
[19/Apr/2025 05:25:59] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:26:39] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:26:39] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:26:39] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:26:39] "GET /static/server_manager/css/index.css HTTP/1.1" 200 964
[19/Apr/2025 05:26:39] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:27:03] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:27:03] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:27:03] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:27:03] "GET /static/server_manager/css/index.css HTTP/1.1" 200 986
[19/Apr/2025 05:27:03] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:27:47] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:27:47] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:27:47] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:27:47] "GET /static/server_manager/css/index.css HTTP/1.1" 200 986
[19/Apr/2025 05:27:47] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:28:43] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:28:43] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:28:43] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:28:43] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1075
[19/Apr/2025 05:28:43] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:29:25] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:29:25] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:29:25] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1163
[19/Apr/2025 05:29:25] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:29:25] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:29:40] "GET /server_manager/ HTTP/1.1" 200 4337
[19/Apr/2025 05:29:40] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:29:40] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1163
[19/Apr/2025 05:29:40] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:29:40] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:30:02] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:30:02] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:30:02] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:30:02] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1163
[19/Apr/2025 05:30:02] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:30:30] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:30:30] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:30:30] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1163
[19/Apr/2025 05:30:30] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:30:30] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:30:46] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:30:46] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:30:46] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1163
[19/Apr/2025 05:30:46] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:30:46] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:32:16] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:32:16] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1163
[19/Apr/2025 05:32:16] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:32:16] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:32:16] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:32:36] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:32:36] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:32:36] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1180
[19/Apr/2025 05:32:36] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:32:36] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:34:30] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:34:30] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1293
[19/Apr/2025 05:34:30] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:34:30] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:34:30] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:34:31] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:34:31] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:34:31] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1293
[19/Apr/2025 05:34:31] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:34:31] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:35:02] "GET / HTTP/1.1" 200 174427
[19/Apr/2025 05:35:02] "GET /static/mod_manager/js/index.js HTTP/1.1" 200 521
[19/Apr/2025 05:35:02] "GET /static/mod_manager/css/index.css HTTP/1.1" 200 3466
[19/Apr/2025 05:35:02] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:35:02] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:35:03] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:35:03] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:35:03] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:35:03] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:35:03] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:35:05] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:35:05] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:35:05] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:35:05] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:35:05] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:35:12] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:35:25] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:35:25] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:35:25] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:35:25] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:35:25] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:35:25] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:35:25] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1315
[19/Apr/2025 05:35:25] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:35:25] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:35:25] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:36:29] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:36:29] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:36:29] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:36:29] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1315
[19/Apr/2025 05:36:29] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:38:01] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:38:01] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:38:01] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1448
[19/Apr/2025 05:38:01] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:38:01] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:38:26] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:38:26] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1501
[19/Apr/2025 05:38:26] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:38:26] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:38:26] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:38:41] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:38:41] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:38:41] "GET /static/server_manager/css/index.css HTTP/1.1" 200 1501
[19/Apr/2025 05:38:41] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:38:41] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:39:11] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:39:11] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:39:11] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:39:11] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:39:11] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:40:57] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:40:57] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:40:57] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:40:57] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2019
[19/Apr/2025 05:40:57] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:41:25] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:41:25] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:41:25] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2019
[19/Apr/2025 05:41:25] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:41:25] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:41:37] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:41:37] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:41:37] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:41:37] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:41:37] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:41:39] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:42:04] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:42:04] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:42:04] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2073
[19/Apr/2025 05:42:04] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:42:04] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:42:40] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:42:40] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:42:40] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:42:40] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:42:40] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:42:41] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:42:42] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:42:42] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:42:42] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:42:42] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:44:11] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:44:11] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:44:11] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:44:11] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2567
[19/Apr/2025 05:44:11] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:44:30] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:44:30] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:44:30] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:44:30] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:44:30] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:44:31] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:44:31] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:44:31] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:44:31] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:44:31] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:44:34] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:44:34] "GET /static/server_manager/css/index.css HTTP/1.1" 304 0
[19/Apr/2025 05:44:36] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:44:37] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:44:38] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:44:38] "GET /static/server_manager/css/index.css HTTP/1.1" 304 0
[19/Apr/2025 05:44:39] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:44:41] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:45:12] "GET /file_exist/?filename=3421714807.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:12] "GET /file_exist/?filename=SleeplessNight.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:12] "GET /file_exist/?filename=neonprime.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:16] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:45:27] "GET /file_exist/?filename=3421714807.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:27] "GET /file_exist/?filename=SleeplessNight.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:27] "GET /file_exist/?filename=neonprime.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:27] "GET /file_exist/?filename=3421714807.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:27] "GET /file_exist/?filename=SleeplessNight.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:27] "GET /file_exist/?filename=neonprime.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:28] "GET /file_exist/?filename=3421714807.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:28] "GET /file_exist/?filename=SleeplessNight.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:28] "GET /file_exist/?filename=neonprime.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:31] "GET /file_exist/?filename=3421714807.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:31] "GET /file_exist/?filename=SleeplessNight.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:31] "GET /file_exist/?filename=neonprime.vpk HTTP/1.1" 200 26
[19/Apr/2025 05:45:36] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:45:46] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:45:46] "GET /static/server_manager/css/index.css HTTP/1.1" 304 0
[19/Apr/2025 05:45:48] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:45:55] "GET /server_manager/ HTTP/1.1" 200 4336
[19/Apr/2025 05:45:55] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2567
[19/Apr/2025 05:46:15] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:46:17] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:46:17] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:46:17] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:46:17] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:46:17] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:47:46] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:47:46] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:47:46] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:47:46] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2567
[19/Apr/2025 05:47:46] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:48:25] "GET /server_manager/ HTTP/1.1" 200 4400
[19/Apr/2025 05:48:25] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:48:25] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2567
[19/Apr/2025 05:48:25] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:48:25] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:48:55] "GET /server_manager/ HTTP/1.1" 200 4400
[19/Apr/2025 05:48:55] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:48:55] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2567
[19/Apr/2025 05:48:55] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:48:55] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:49:04] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:49:04] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:49:04] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:49:04] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:49:04] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:49:05] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:49:05] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:49:05] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:49:05] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:49:05] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:49:13] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:49:15] "GET /upload_mod/ HTTP/1.1" 200 3871
[19/Apr/2025 05:49:15] "GET /static/mod_manager/css/upload-mod.css HTTP/1.1" 200 2721
[19/Apr/2025 05:49:15] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:49:15] "GET /static/mod_manager/js/upload-mod.js HTTP/1.1" 200 5496
[19/Apr/2025 05:49:15] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:49:16] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:49:16] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:49:16] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:49:16] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2567
[19/Apr/2025 05:49:16] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:50:10] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:50:10] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:50:10] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2721
[19/Apr/2025 05:50:10] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:50:10] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:50:35] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:50:35] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2721
[19/Apr/2025 05:50:35] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:50:35] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:50:35] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:50:42] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:50:42] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:50:42] "GET /static/mod_manager/js/subscribe-mod.js HTTP/1.1" 200 3526
[19/Apr/2025 05:50:42] "GET /static/mod_manager/css/subscribe-mod.css HTTP/1.1" 200 2629
[19/Apr/2025 05:50:42] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:50:52] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:50:52] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:50:52] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:50:52] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:50:52] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2743
[19/Apr/2025 05:50:52] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:51:17] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:51:17] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:51:17] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2761
[19/Apr/2025 05:51:17] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:51:17] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:51:26] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:51:26] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:51:26] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:51:26] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2780
[19/Apr/2025 05:51:26] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:51:50] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:51:51] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:51:51] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:51:52] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:51:52] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:51:52] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2832
[19/Apr/2025 05:51:52] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:52:12] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:52:12] "GET /static/server_manager/css/index.css HTTP/1.1" 304 0
[19/Apr/2025 05:52:37] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:52:37] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2922
[19/Apr/2025 05:52:41] "GET /subscribe_mod/ HTTP/1.1" 200 4128
[19/Apr/2025 05:53:00] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:53:00] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:53:21] "GET /server_manager/ HTTP/1.1" 200 4410
[19/Apr/2025 05:53:21] "GET /static/mod_manager/css/global.css HTTP/1.1" 200 1631
[19/Apr/2025 05:53:21] "GET /static/server_manager/js/index.js HTTP/1.1" 200 0
[19/Apr/2025 05:53:21] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2983
[19/Apr/2025 05:53:21] "GET /favicon.ico HTTP/1.1" 404 179
[19/Apr/2025 05:54:08] "GET /server_manager/ HTTP/1.1" 200 4419
[19/Apr/2025 05:54:08] "GET /static/server_manager/css/index.css HTTP/1.1" 200 2983`;
    document.querySelector('#server_log .log-panel').innerHTML = content;
})();
