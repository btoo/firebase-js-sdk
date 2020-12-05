<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [lite](./firestore_lite.md) &gt; [DocumentReference](./firestore_lite.documentreference.md) &gt; [withConverter](./firestore_lite.documentreference.withconverter.md)

## DocumentReference.withConverter() method

Applies a custom data converter to this `DocumentReference`<!-- -->, allowing you to use your own custom model objects with Firestore. When you call , [getDoc()](./firestore_.getdoc.md)<!-- -->, etc. with the returned `DocumentReference` instance, the provided converter will convert between Firestore data and your custom type `U`<!-- -->.

<b>Signature:</b>

```typescript
withConverter<U>(converter: FirestoreDataConverter<U>): DocumentReference<U>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  converter | [FirestoreDataConverter](./firestore_lite.firestoredataconverter.md)<!-- -->&lt;U&gt; | Converts objects to and from Firestore. |

<b>Returns:</b>

[DocumentReference](./firestore_lite.documentreference.md)<!-- -->&lt;U&gt;

A `DocumentReference<U>` that uses the provided converter.
