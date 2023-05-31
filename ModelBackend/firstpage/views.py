from django.shortcuts import render
from django.http import JsonResponse
import json
import pandas as pd
import joblib
# from django.core.files.storage import FileSystemStorage

model = joblib.load('projectModel.pkl')
# Create your views here.
def scoreJson(request):
    data = json.loads(request.body)
    val = pd.DataFrame([data])
    prediction = model.predict_proba(val)[0][1]
    prediction=float(prediction)
    print(prediction)

    return JsonResponse({'dyslexic':prediction})

# def scoreFile(request):
#     fileObj =request.FILES('filePath')    
#     fs = FileSystemStorage()
#     filePathName = fs.save(fileObj.name,fileObj)
#     filePathName = fs.url(filePathName)
#     filePath = '.'+filePathName
#     return JsonResponse({'score':filePath})