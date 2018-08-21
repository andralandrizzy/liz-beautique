from django.db import models

# Create your models here.
from django.db import models
from random import choice
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,  related_name='user')
    address = models.CharField(_('Address'), max_length=50, blank=True, null=True)
    city = models.CharField(_('City'), max_length=40, blank=True, null=True)
    post = models.CharField(_('Last name'), max_length=40, blank=True, null=True)
    token = models.CharField(_('Token'), max_length=15, unique=True, db_index=True, null=True)
    subscribed = models.CharField(_('Subscribed or not'), max_length=2, blank=True, null=True)

def set_token(self):
            self.token = ''.join([choice('abcdefghijklmnopqrstuvwxyz0123456789') for i in range(15)])

def save(self, *args, **kwargs):
    super(Profile, self).save(*args, **kwargs)
    self.set_token()
