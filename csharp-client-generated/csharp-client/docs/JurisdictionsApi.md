# IO.Swagger.Api.JurisdictionsApi

All URIs are relative to *http://localhost:14324*

Method | HTTP request | Description
------------- | ------------- | -------------
[**JurisdictionsDeleteJurisdiction**](JurisdictionsApi.md#jurisdictionsdeletejurisdiction) | **DELETE** /api/Jurisdictions/{id} | 
[**JurisdictionsGetJurisdiction**](JurisdictionsApi.md#jurisdictionsgetjurisdiction) | **GET** /api/Jurisdictions/{id} | 
[**JurisdictionsGetJurisdictions**](JurisdictionsApi.md#jurisdictionsgetjurisdictions) | **GET** /api/Jurisdictions | This API retunrs ALL Jurisdictions sorted by Full Name
[**JurisdictionsPostJurisdiction**](JurisdictionsApi.md#jurisdictionspostjurisdiction) | **POST** /api/Jurisdictions | 
[**JurisdictionsPutJurisdiction**](JurisdictionsApi.md#jurisdictionsputjurisdiction) | **PUT** /api/Jurisdictions/{id} | 


<a name="jurisdictionsdeletejurisdiction"></a>
# **JurisdictionsDeleteJurisdiction**
> Jurisdiction JurisdictionsDeleteJurisdiction (int? id)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JurisdictionsDeleteJurisdictionExample
    {
        public void main()
        {
            var apiInstance = new JurisdictionsApi();
            var id = 56;  // int? | 

            try
            {
                Jurisdiction result = apiInstance.JurisdictionsDeleteJurisdiction(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling JurisdictionsApi.JurisdictionsDeleteJurisdiction: " + e.Message );
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

[**Jurisdiction**](Jurisdiction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jurisdictionsgetjurisdiction"></a>
# **JurisdictionsGetJurisdiction**
> Jurisdiction JurisdictionsGetJurisdiction (int? id)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JurisdictionsGetJurisdictionExample
    {
        public void main()
        {
            var apiInstance = new JurisdictionsApi();
            var id = 56;  // int? | 

            try
            {
                Jurisdiction result = apiInstance.JurisdictionsGetJurisdiction(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling JurisdictionsApi.JurisdictionsGetJurisdiction: " + e.Message );
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

[**Jurisdiction**](Jurisdiction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jurisdictionsgetjurisdictions"></a>
# **JurisdictionsGetJurisdictions**
> List<Jurisdiction> JurisdictionsGetJurisdictions ()

This API retunrs ALL Jurisdictions sorted by Full Name

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JurisdictionsGetJurisdictionsExample
    {
        public void main()
        {
            var apiInstance = new JurisdictionsApi();

            try
            {
                // This API retunrs ALL Jurisdictions sorted by Full Name
                List&lt;Jurisdiction&gt; result = apiInstance.JurisdictionsGetJurisdictions();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling JurisdictionsApi.JurisdictionsGetJurisdictions: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Jurisdiction>**](Jurisdiction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jurisdictionspostjurisdiction"></a>
# **JurisdictionsPostJurisdiction**
> Jurisdiction JurisdictionsPostJurisdiction (Jurisdiction jurisdiction)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JurisdictionsPostJurisdictionExample
    {
        public void main()
        {
            var apiInstance = new JurisdictionsApi();
            var jurisdiction = new Jurisdiction(); // Jurisdiction | 

            try
            {
                Jurisdiction result = apiInstance.JurisdictionsPostJurisdiction(jurisdiction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling JurisdictionsApi.JurisdictionsPostJurisdiction: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jurisdiction** | [**Jurisdiction**](Jurisdiction.md)|  | 

### Return type

[**Jurisdiction**](Jurisdiction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jurisdictionsputjurisdiction"></a>
# **JurisdictionsPutJurisdiction**
> void JurisdictionsPutJurisdiction (int? id, Jurisdiction jurisdiction)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JurisdictionsPutJurisdictionExample
    {
        public void main()
        {
            var apiInstance = new JurisdictionsApi();
            var id = 56;  // int? | 
            var jurisdiction = new Jurisdiction(); // Jurisdiction | 

            try
            {
                apiInstance.JurisdictionsPutJurisdiction(id, jurisdiction);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling JurisdictionsApi.JurisdictionsPutJurisdiction: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **jurisdiction** | [**Jurisdiction**](Jurisdiction.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

