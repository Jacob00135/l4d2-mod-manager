用于求生服务器的的MOD管理，部署到求生服务器，包含的功能：根据Steam创意工坊的MOD的ID订阅MOD，取消已订阅MOD，查看已订阅MOD列表，查看已安装的三方图的建图代码。

项目启动方式：在项目根目录新建一个`start.sh`，内容类似：

```bash
export L4D2_MOD_MANAGER_ADMIN_USERNAME=<管理员名称>
export L4D2_MOD_MANAGER_ADMIN_PASSWORD=<管理员密码>
export L4D2_MOD_ADDONS_PATH=<游戏的addons目录>

PYTHON_PATH=<Python解释器路径>
HOST=<网站host>
PORT=<网站端口号>

$PYTHON_PATH manage.py runserver $HOST:$PORT
```
