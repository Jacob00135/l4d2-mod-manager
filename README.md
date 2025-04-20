### 介绍

***该工具仅适用于Linux系统***

在网页端的用于求生服务器的的MOD管理，部署到求生服务器，包含的功能：

- 有单个管理员，必须输入账号密码才可以使用MOD管理器
- 查看已有MOD列表，列表中展示MOD名称、描述、文件名、SHA256校验码、封面（如果有）、建图代码（如果有）
- 订阅Steam创意工坊的MOD，需要提供创意工坊的MOD链接
- 从本地上传MOD到服务器
- 删除服务器MOD
- 管理求生服务（需要额外配置）：查看日志、启动服务、停止服务、根据建图代码换图

### 环境配置

在服务器中安装Python 3.12.9或更高版本，并安装requirements.txt中的三方库，例如：

```bash
pip install -r requirements.txt
```

### 配置管理求生服务

以下是使用管理求生服务功能所需的额外配置：

- 求生服务可以用bash脚本来启动，例如：`bash run_l4d2_server.sh`
- 服务器需要安装`screen`
- 配置`screen`的日志输出，下面是一个例子：

```bash
vim ~/.screenrc

# 将screen的日志输出到该路径的文件，其中%t表示screen会话创建时的-t参数
logfile /home/username/screenlog/screenlog_%t.log

# screen更新日志文件的间隔（秒）
logfileflush 5

:wq
```

### 编写启动脚本

在项目根目录新建一个启动文件`start.sh`，内容如下：

```bash
export L4D2_MOD_MANAGER_ADMIN_USERNAME=<管理员名称>
export L4D2_MOD_MANAGER_ADMIN_PASSWORD=<管理员密码>
export L4D2_MOD_ADDONS_PATH=<游戏的addons目录>
export L4D2_SERVER_START_SCRIPT_PATH=<启动求生服务的bash脚本路径>
export L4D2_SERVER_RCON_PORT=<求生服务的端口号>
export L4D2_SERVER_RCON_PASSWORD=<求生服务的rcon_password>
export L4D2_SCREEN_SESSION_NAME=<启动求生服务的screen会话名称>
export L4D2_SCREEN_LOG_PATH=<screen日志路径>

PYTHON_PATH=<Python解释器路径>
HOST=<网站host>
PORT=<网站端口号>

$PYTHON_PATH manage.py migrate
$PYTHON_PATH manage.py runserver $HOST:$PORT
```

一个例子：

```bash
export L4D2_MOD_MANAGER_ADMIN_USERNAME="dd"
export L4D2_MOD_MANAGER_ADMIN_PASSWORD="123456qwert!@#$%"
export L4D2_MOD_ADDONS_PATH="/home/dd/l4d2/left4dead2/addons/"
export L4D2_SERVER_START_SCRIPT_PATH="/home/dd/run_l4d2_server.sh"
export L4D2_SERVER_RCON_PORT="65500"
export L4D2_SERVER_RCON_PASSWORD="123456qwert!@#$%"
export L4D2_SCREEN_SESSION_NAME="l4d2"
export L4D2_SCREEN_LOG_PATH="/home/dd/screenlog/l4d2.log"

PYTHON_PATH="/home/xjy/miniconda3/envs/l4d2-mod-manager/bin/python"
HOST="0.0.0.0"
PORT="5000"

$PYTHON_PATH manage.py migrate
$PYTHON_PATH manage.py runserver $HOST:$PORT
```

最后，执行`start.sh`以启动：

```bash
bash start.sh
```

