<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-repository-links.html -->

## Checkout Links

If you want to make your Subversion repository available to others you may want to include a link to it from your website. One way to make this more accessible is to include a *checkout link* for other TortoiseSVN users.

When you install TortoiseSVN, it registers a new `tsvn:` protocol. When a TortoiseSVN user clicks on such a link, the checkout dialog will open automatically with the repository URL already filled in.

To include such a link in your own html page, you need to add code which looks something like this:

``` programlisting
<a href="tsvn:http://project.domain.org/svn/trunk">
</a>
```

Of course it would look even better if you included a suitable picture. You can use the [*TortoiseSVN logo*](https://svn.code.sf.net/p/tortoisesvn/code/trunk/www/source/assets/img/TortoiseCheckout.png) or you can provide your own image.

``` programlisting
<a href="tsvn:http://project.domain.org/svn/trunk">
<img src=TortoiseCheckout.png></a>
```

You can also make the link point to a specific revision, for example

``` programlisting
<a href="tsvn:http://project.domain.org/svn/trunk?100">
</a>
```
