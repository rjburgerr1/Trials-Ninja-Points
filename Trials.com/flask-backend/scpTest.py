"""Client to handle connections and actions executed against a remote host."""
from paramiko import SSHClient, AutoAddPolicy, RSAKey
from paramiko.auth_handler import AuthenticationException, SSHException

class RemoteClient:
    """Client to interact with a remote host via SSH & SCP."""

    def __init__ (self, host, user, ssh_key_filepath, remote_path):
        self.host = host
        self.user = user
        self.ssh_key_filepath = ssh_key_filepath
        self.remote_path = remote_path
        self.client = None
        self.scp = None
        self.conn = None
        self._upload_ssh_key()