# IO.Swagger.Api.ValuesApi

All URIs are relative to *http://localhost:14324*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ValuesDelete**](ValuesApi.md#valuesdelete) | **DELETE** /api/Values/{id} | 
[**ValuesGetEveryThing**](ValuesApi.md#valuesgeteverything) | **GET** /api/Values | 
[**ValuesGetOneThing**](ValuesApi.md#valuesgetonething) | **GET** /api/Values/{id} | 
[**ValuesPost**](ValuesApi.md#valuespost) | **POST** /api/Values | 
[**ValuesPut**](ValuesApi.md#valuesput) | **PUT** /api/Values/{id} | 


<a name="valuesdelete"></a>
# **ValuesDelete**
> void ValuesDelete (int? id)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValuesDeleteExample
    {
        public void main()
        {
            var apiInstance = new ValuesApi();
            var id = 56;  // int? | 

            try
            {
                apiInstance.ValuesDelete(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValuesApi.ValuesDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="valuesgeteverything"></a>
# **ValuesGetEveryThing**
> List<string> ValuesGetEveryThing ()



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValuesGetEveryThingExample
    {
        public void main()
        {
            var apiInstance = new ValuesApi();

            try
            {
                List&lt;string&gt; result = apiInstance.ValuesGetEveryThing();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValuesApi.ValuesGetEveryThing: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<string>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="valuesgetonething"></a>
# **ValuesGetOneThing**
> string ValuesGetOneThing (int? id)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValuesGetOneThingExample
    {
        public void main()
        {
            var apiInstance = new ValuesApi();
            var id = 56;  // int? | 

            try
            {
                string result = apiInstance.ValuesGetOneThing(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValuesApi.ValuesGetOneThing: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="valuespost"></a>
# **ValuesPost**
> void ValuesPost (string value)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValuesPostExample
    {
        public void main()
        {
            var apiInstance = new ValuesApi();
            var value = value_example;  // string | 

            try
            {
                apiInstance.ValuesPost(value);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValuesApi.ValuesPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **string**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="valuesput"></a>
# **ValuesPut**
> void ValuesPut (int? id, string value)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ValuesPutExample
    {
        public void main()
        {
            var apiInstance = new ValuesApi();
            var id = 56;  // int? | 
            var value = value_example;  // string | 

            try
            {
                apiInstance.ValuesPut(id, value);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ValuesApi.ValuesPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **value** | **string**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

